const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
    [
        
    ],
    {
        generateEtags: false,
        eslint: {
            // Warning: Dangerously allow production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        },
        images: {
            domains: [],
        },
        env: {
            canonicalLink: "https://www.app-deployment.com/",
            companyName: "app-deployment"
        }
    }
)