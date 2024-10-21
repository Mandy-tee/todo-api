import { Router } from "express";
import { getProfile, loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.js";
import { UserAvatarUpload } from "../middlewares/Upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";


// Create router
const userRouter = Router();

// Define routes
userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.get("/users/me", isAuthenticated, hasPermission("get_profile"), getProfile);

userRouter.post("/users/logout", isAuthenticated, logoutUser);

userRouter.patch("/users/me", isAuthenticated, hasPermission("update_profile"), UserAvatarUpload.single("avatar"), updateProfile);

// Export router
export default userRouter;