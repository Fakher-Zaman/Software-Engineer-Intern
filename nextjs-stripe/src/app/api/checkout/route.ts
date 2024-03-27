import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET);