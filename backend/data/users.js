import bcrypt from "bcryptjs";
const users = [
    {
        name: "Admin User",
        email: "admin@admin.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Jhone Doe",
        email: "jhon@admin.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Simple User",
        email: "user@admin.com",
        password: bcrypt.hashSync("123456", 10),
    },
];
export default users;
