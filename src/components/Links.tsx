import { createWhatsAppLink, createPhoneNumber } from '@/utils/helpers'
import React from 'react'

type Anchor = React.AnchorHTMLAttributes<HTMLAnchorElement>
type AnchorExcludeHref = Pick<Anchor, Exclude<keyof Anchor, 'href'>>

type ExternalLinkProps = Anchor & { href: string }
export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  ...restProps
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
    {children}
  </a>
)

type MailtoLinkProps = AnchorExcludeHref & { email: string }
export const MailtoLink: React.FC<MailtoLinkProps> = ({
  email,
  children,
  ...restProps
}) => (
  <a href={`mailto:${email}`} {...restProps}>
    {children}
  </a>
)

type PhoneLinkProps = AnchorExcludeHref & { phone: string }
export const PhoneLink: React.FC<PhoneLinkProps> = ({
  phone,
  children,
  ...restProps
}) => (
  <a href={`tel:+${createPhoneNumber({ phone })}`} {...restProps}>
    {children}
  </a>
)

type WhatsAppLinkProps = AnchorExcludeHref & { phone: string; text?: string }
export const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({
  phone,
  text,
  children,
  ...restProps
}) => (
  <a
    href={createWhatsAppLink({ phone, text })}
    target="_blank"
    rel="noopener noreferrer nofollow"
    {...restProps}
  >
    {children}
  </a>
)
