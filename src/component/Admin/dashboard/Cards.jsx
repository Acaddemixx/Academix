import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";

function Cards() {
  const Token = useSelector(selectCurrentToken);

  const [studentCounts, setStudentCounts] = useState({
    first_year: 0,
    second_year: 0,
    third_year: 0,
    forth_year: 0,
    fifth_year: 0,
  });

  useEffect(() => {
    const fetchStudentCounts = async () => {
      try {
        const response = await axios.get(
          "http://54.237.124.13:8000/user/counts/",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setStudentCounts(response.data.data);
      } catch (error) {
        console.error("Error fetching student counts: ", error);
      }
    };

    fetchStudentCounts();
  }, []);

  return (
    <>
      <Card className=" mt-1 pr-3 grid grid-cols-5 md:grid-cols-5 sm:grid-cols-1  ">
        <Card className="bg-[#C2D2F9] p-4 ml-3 rounded-[20px] shadow-sm overflow-hidden">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Freshman
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.first_year}
            </Typography>
          </CardBody>
        </Card>
        <Card className="bg-[#C2D2F9] p-4 ml-3 rounded-[20px] shadow-sm overflow-hidden">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Second Year
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.second_year}
            </Typography>
          </CardBody>
        </Card>
        <Card className="bg-[#C2D2F9] p-4 ml-3 rounded-[20px] shadow-sm overflow-hidden">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Third Year
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.third_year}
            </Typography>
          </CardBody>
        </Card>
        <Card className="bg-[#C2D2F9] p-4 ml-3 rounded-[20px] shadow-sm overflow-hidden">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Fourth Year
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.forth_year}
            </Typography>
          </CardBody>
        </Card>
        <Card className="bg-[#C2D2F9] p-4 ml-3 rounded-[20px] shadow-sm overflow-hidden">
          <CardBody className=" font-extrabold">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Fifth Year
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.fifth_year}
            </Typography>
          </CardBody>
        </Card>
      </Card>
    </>
  );
}

export default Cards;
