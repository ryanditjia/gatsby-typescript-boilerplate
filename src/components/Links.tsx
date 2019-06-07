import { createCallableNumber } from '@/utils/helpers'
import React from 'react'

type Anchor = React.AnchorHTMLAttributes<HTMLAnchorElement>
type AnchorExcludeHref = Pick<Anchor, Exclude<keyof Anchor, 'href'>>

interface ExternalLinkProps extends Anchor {
  href: string
}

interface MailtoLinkProps extends AnchorExcludeHref {
  email: string
}

interface PhoneLinkProps extends AnchorExcludeHref {
  phone: string
}

interface WhatsAppLinkProps extends AnchorExcludeHref {
  phone: string
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  ...restProps
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
    {children}
  </a>
)

export const MailtoLink: React.FC<MailtoLinkProps> = ({
  email,
  children,
  ...restProps
}) => (
  <a href={`mailto:${email}`} {...restProps}>
    {children}
  </a>
)

export const PhoneLink: React.FC<PhoneLinkProps> = ({
  phone,
  children,
  ...restProps
}) => (
  <a href={`tel:${createCallableNumber(phone)}`} {...restProps}>
    {children}
  </a>
)

export const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({
  phone,
  children,
  ...restProps
}) => (
  <a
    // slice(1) to remove the leading + sign
    href={`https://wa.me/${createCallableNumber(phone).slice(1)}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
    {...restProps}
  >
    {children}
  </a>
)
