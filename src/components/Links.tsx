import React from 'react'
import { Anchor, AnchorExcludeHref } from '../types'
import { createPhoneNumber, createWhatsAppLink } from '../utils/helpers'

type ExternalLinkProps = Anchor & { href: string; children: React.ReactNode }
export function ExternalLink({
  href,
  children,
  ...restProps
}: ExternalLinkProps): React.ReactElement {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
      {children}
    </a>
  )
}

type MailtoLinkProps = AnchorExcludeHref & {
  email: string
  children: React.ReactNode
}
export function MailtoLink({
  email,
  children,
  ...restProps
}: MailtoLinkProps): React.ReactElement {
  return (
    <a href={`mailto:${email}`} {...restProps}>
      {children}
    </a>
  )
}

type PhoneLinkProps = AnchorExcludeHref & {
  phone: string
  children: React.ReactNode
}
export function PhoneLink({
  phone,
  children,
  ...restProps
}: PhoneLinkProps): React.ReactElement {
  return (
    <a href={`tel:+${createPhoneNumber({ phone })}`} {...restProps}>
      {children}
    </a>
  )
}

type WhatsAppLinkProps = AnchorExcludeHref & {
  phone: string
  text?: string
  children: React.ReactNode
}
export function WhatsAppLink({
  phone,
  text,
  children,
  ...restProps
}: WhatsAppLinkProps): React.ReactElement {
  return (
    <a
      href={createWhatsAppLink({ phone, text })}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...restProps}
    >
      {children}
    </a>
  )
}
