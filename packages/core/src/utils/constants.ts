import { ThemeName, ThemePair } from '../types'

const pkg = require('../../package.json') // tslint:disable-line

export const APP_VERSION = pkg.version as string

const _window = typeof window !== 'undefined' ? window : undefined
export const HOSTNAME =
  _window &&
  _window.location &&
  _window.location.hostname &&
  _window.location.hostname

export const IS_BETA =
  APP_VERSION.includes('beta') || (!!HOSTNAME && HOSTNAME.includes('beta'))

export const COLUMNS_LIMIT = 25
export const MIN_COLUMN_WIDTH = 300
export const MAX_COLUMN_WIDTH = 340

export const DISABLE_ANIMATIONS = false
export const DISABLE_SWIPEABLE_CARDS = true

export const DEFAULT_DARK_THEME: ThemeName = 'dark-gray'
export const DEFAULT_LIGHT_THEME: ThemeName = 'light-white'
export const DEFAULT_THEME_PAIR: ThemePair = {
  id: DEFAULT_DARK_THEME,
  color: '',
}

export const DEFAULT_GITHUB_OAUTH_SCOPES = ['notifications', 'user:email']

export const APPSTORE_ID = '1191864199'
export const GOOGLEPLAY_ID = 'com.devhubapp'

export const LANDING_BASE_URL = 'https://devhubapp.com'
export const APP_BASE_URL = 'https://app.devhubapp.com'
export const DEVHUB_BETA_URL = 'https://beta.devhubapp.com'
export const API_BASE_URL = 'https://api.devhubapp.com'
export const GRAPHQL_ENDPOINT = `${API_BASE_URL}/graphql`
export const DEVHUB_LINKS = {
  DOWNLOAD_PAGE: `${LANDING_BASE_URL}/download`,
  PRICING_PAGE: `${LANDING_BASE_URL}/pricing`,
  SUBSCRIBE_PAGE: `${LANDING_BASE_URL}/subscribe`,
  SLACK_INVITATION: 'https://slack.devhubapp.com',
  GITHUB_REPOSITORY: 'https://github.com/devhubapp/devhub',
  TWITTER_PROFILE: 'https://twitter.com/devhubapp',
}

export const APP_DEEP_LINK_SCHEMA = 'devhub'
export const APP_DEEP_LINK_URLS = {
  github_oauth: `${APP_DEEP_LINK_SCHEMA}://github/oauth`,
  preferences: `${APP_DEEP_LINK_SCHEMA}://preferences`,
  pricing: `${APP_DEEP_LINK_SCHEMA}://pricing`,
  redux: `${APP_DEEP_LINK_SCHEMA}://redux`,
  subscribe: `${APP_DEEP_LINK_SCHEMA}://subscribe`,
}

// prettier-ignore
export const EMPTY_ARRAY = Object.freeze([]) as []

// prettier-ignore
export const EMPTY_OBJ = Object.freeze({}) as {}
