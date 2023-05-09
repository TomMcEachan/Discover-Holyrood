import { createMachine } from 'xstate'

export const ColorModeMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QGMD2AbVAnAwgCwEMA7GAOgBECsBrAYgBUB5AcWYBkBRAbQAYBdRKAAOqWAEsALmNRFBIAB6IAjAHYAHKTUAWAMwqArABoQAT0RqlpfQF9rxtJlyESYUmzFQ8Ehi3bd+ciLiUjJyigiqGtp6RqbK+iq2diBEqBBwcg7Y+MQwgaKS0rJICogAtABsxmYIlbb2GNnOZO6eEvnBRWGIWgBM1eYqVmo6o2Pjo-UgWU65rpQ0HYWhJeG9AJxaAwjrPKQ8IxNHSdZAA */
  createMachine({
    predictableActionArguments: true,
    initial: 'Light',
    id: 'ChangeTheme',
    schema: {
      events: {} as { type: 'TOGGLE' }
    },
    states: {
      Light: {
        on: {
          TOGGLE: 'Dark'
        }
      },
      Dark: {
        on: {
          TOGGLE: 'Light'
        }
      }
    }
  })
