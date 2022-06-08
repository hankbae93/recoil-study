// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface UserTypes {
	id: number;
	name: string;
}

const users: UserTypes[] = [];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<UserTypes>
) {
	res.status(200).json({ id: 1, name: "dd" });
}
