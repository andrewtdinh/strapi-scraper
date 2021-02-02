module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9843dc813003a8a4185377be1dd7630c'),
    },
  },
  cron: {
    enabled: true,
  }
});
