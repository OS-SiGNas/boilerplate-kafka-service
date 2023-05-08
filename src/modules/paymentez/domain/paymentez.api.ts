import { Fetch } from "../../../share/Fetch";

const token = "";
const url = "https://api.paymentez.com";

export const paymentez = new Fetch(url, token);
