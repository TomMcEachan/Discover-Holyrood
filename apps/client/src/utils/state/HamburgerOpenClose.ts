import { createMachine } from 'xstate'

export const HamburgerOpenClose =
  /** @xstate-layout N4IgpgJg5mDOIC5QHkAOYB2BhANge1jAAkBDAWwCMBXAJxhoFlMqA6XAyAYgGUB1ASQAqWIgG0ADAF1EoVAQCWAF3l4MMkAA9EARgBsAVhYBOE0YAcAFgDsF7QCZt4oxYA0IAJ46AzNuOmjdl5W4rri+tYAvhFuaJjshKSUtPRMGKyxGDwCwmJS6nKwSipqSJo6Bn4mljb2js5unghmvvpR0SAYeBBw6hnxxOTUdGCMzPkKyqrqWggAtLoNiPNRMejY+AmDySOprP0Q44WTJaAzFnaLTVYs+mZeXnZG+tpmul6huisgfRsDScOjNIsDKHIpTUozOxmIwsYJeJwWCxmOznbRGS5GcQscR3B5PF5vD5tCJAA */
  createMachine({
    predictableActionArguments: true,
    id: 'OpenCloseHamburgerMenu',
    schema: {
      events: {} as { type: 'SWITCH' }
    },
    initial: 'Closed',
    states: {
      Closed: {
        on: {
          SWITCH: 'Open'
        }
      },
      Open: {
        on: {
          SWITCH: 'Closed'
        }
      }
    }
  })
