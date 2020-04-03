import {test} from "./controller/usersController";

export const AppRoutes = [
    {
        path: "/test",
        method: "get",
        action: test
    }
];