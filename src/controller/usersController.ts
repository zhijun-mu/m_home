import {Request, Response} from "express";
import {getManager} from "typeorm";
import {users} from "../entity/users";



export async function test(request: Request, response: Response) {
	response.json("ok_test");
}
