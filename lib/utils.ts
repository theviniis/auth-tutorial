import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function wait<D = unknown>(
  time: number,
  data?: D
): Promise<D | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data ?? null)
    }, time)
  })
}
