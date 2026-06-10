/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Builds a dynamic WhatsApp click-to-chat link
 * @param number Country code + area code + number (e.g. 5521969060505)
 * @param message Pre-filled message to be encoded
 */
export function getWhatsappLink(number: string, message: string): string {
  const sanitized = number.replace(/\D/g, "");
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
}

/**
 * Super clean helper to join Tailwind CSS classnames together
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
