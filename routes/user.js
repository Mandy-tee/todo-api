import { Router } from "express";
import { loginUser, logoutUser, registerUser, updateProfile  } from "../controllers/user.js";
import { UserAvatarUpload } from "../middlewares/Upload.js";


// Create router
const userRouter = Router();

// Define routes
userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.post("/users/logout", logoutUser);

userRouter.post("/users/me", UserAvatarUpload.single("avatar"), updateProfile);

// Export router
export default userRouter;