const { z } = require("zod");

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  conPassword: z.string()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

const followSchema = z.object({
  leagueId: z.number(),
  follow: z.boolean()
});

module.exports = {
  signupSchema,
  loginSchema,
  followSchema
};
