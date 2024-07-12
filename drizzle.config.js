/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:3tULYM2vKqVb@ep-ancient-lab-a1ip24ct.ap-southeast-1.aws.neon.tech/MockInterviewTool?sslmode=require',
    }
  };