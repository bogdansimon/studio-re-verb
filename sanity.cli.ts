import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qms6docm',
    dataset: 'production',
  },
  studioHost: 're-verb',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */

  autoUpdates: true,
})
