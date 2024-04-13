import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { BellIcon } from "@iconicicons/react";

const StudenthNav = () => {
  return (
    <>
      <div className="flex-1 w-full">
        <Navbar className="mx-auto w-full px-6 py-3">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography variant="h6" className="mr-4 cursor-pointer py-1.5">
              AASTU Student
            </Typography>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div>
                  <Typography variant="h6">Abebe Kebede</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-right"
                  >
                    Student
                  </Typography>
                </div>
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default StudenthNav;
