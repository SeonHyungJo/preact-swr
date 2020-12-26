import { createContext } from 'preact'

import { ConfigInterface } from './types'

const SWRConfigContext = createContext<ConfigInterface>({})
SWRConfigContext.displayName = 'SWRConfigContext'

export default SWRConfigContext
