import 'dotenv/config';

export default {
  "expo": {
    "name": "restaurants",
    "slug": "restaurants",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.zulu.restaurants",
      "config": {
        "googleSignIn": {
          "reservedClientId": "com.googleusercontent.apps.763173616565-8o5vocujlak8lsu9i1menfa11a4eq8am"
        }
      },
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "android": {
      "package": "com.zulu.restaurants",
      "googleServicesFile": "./google-services.json",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "config": {
        "googleMaps": {
          "apiKey": "AIzaSyAiSV22B_JwDGoxCNf6VWFMCelxGwmgTJs"
        }
      },
      "permissions": [
        "CAMERA_ROLL",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE",
        "LOCATION",
        "ACCESS_COARSE_LOCATION",
        "ACCESS_FINE_LOCATION",
        "USER_FACING_NOTIFICATIONS"
      ],
      "useNextNotificationsApi": true
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  },
  extra: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  }
}
