import { fileURLToPath } from 'node:url'
import { describe, it } from 'vitest'
import { setup } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page', async () => {
  })
})
