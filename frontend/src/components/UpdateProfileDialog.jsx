import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Loader2, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import { setUser } from '../redux/authSlice'
import { toast } from 'sonner'

const UpdateProfileDialog = ({open, setOpen}) => {
    const [loading, setLoading] = useState(false);

    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.map(skill => skill) || "",
        file: user?.profile?.resume || ""
    });

    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
        setLoading(true);
        const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        });
        if (res.data.success) {
            dispatch(setUser(res.data.user));
            toast.success(res.data.message);
        }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally{
            setLoading(false);
        }
        setOpen(false);
        console.log(input);
    }

    const [skills, setSkills] = useState(input.skills || []);
    const [newSkill, setNewSkill] = useState("");

    // Add a new skill
    const handleAddSkill = () => {
    const skill = newSkill.trim();
    if (skill && !skills.includes(skill)) {
        const updatedSkills = [...skills, skill];
        setSkills(updatedSkills);
        setInput({ ...input, skills: updatedSkills }); // If you need it in main input
        setNewSkill("");
    }
    };

    // Delete a skill
    const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    setInput({ ...input, skills: updatedSkills });
    };

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-white shadow-lg rounded-md max-w-xl w-full overflow-y-auto max-h-[90vh]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                        <DialogDescription>
                            Update your profile
                        </DialogDescription>
                        <DialogClose asChild>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-black" >
                            <X className="h-4 w-4" />
                            </button>
                        </DialogClose>

                    </DialogHeader>
                    <form  onSubmit={submitHandler}>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className="text-right">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="number" className="text-right">Number</Label>
                                <Input
                                    id="number"
                                    name="number"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className="text-right">Bio</Label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className="text-right">Skills</Label>
                                <div className="col-span-3 space-y-2">
                                    {/* Display existing skills as badges with close buttons */}
                                    <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <div
                                        key={index}
                                        className="flex items-center bg-gray-200 text-sm rounded-full px-3 py-1"
                                        >
                                        {skill}
                                        <Button
                                            onClick={() => handleDeleteSkill(index)}
                                            className="ml-2 text-gray-600 hover:text-red-500"
                                        >
                                            ×
                                        </Button>
                                        </div>
                                        ))}
                                        </div>

                                        {/* Input and Add Button */}
                                        <div className="flex gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Add a skill"
                                            value={newSkill}
                                            onChange={(e) => setNewSkill(e.target.value)}
                                            className="w-full"
                                        />
                                        <Button type="button" onClick={handleAddSkill}>
                                            Add
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file" className="text-right">Resume</Label>
                                <Input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={fileChangeHandler}
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            {
                                loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog
