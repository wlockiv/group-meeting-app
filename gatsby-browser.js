/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import Amplify from 'aws-amplify'
import awsExports from './src/aws-exports'

Amplify.configure(awsExports)
