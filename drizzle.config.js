/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:qd3zWQt0rKSy@ep-winter-silence-a55hw242.us-east-2.aws.neon.tech/AI-short-video-generator?sslmode=require',
  },
};
