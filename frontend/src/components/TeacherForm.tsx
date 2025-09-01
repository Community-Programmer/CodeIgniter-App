import React, { useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { ErrorResponse } from "@/types/types";
import { teacherAPI } from "@/services/api";

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    university_name: "",
    gender: "",
    year_joined: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await teacherAPI.create(formData);

      setMessage(response.data.message);
      setFormData({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        university_name: "",
        gender: "",
        year_joined: "",
      });
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;
      if (axiosError.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        const messagesObj = axiosError.response?.data?.messages;
        let errorMsg = "An error occurred";
        if (messagesObj && typeof messagesObj === "object") {
          errorMsg = Object.values(messagesObj).join("; ");
        }
        setError(errorMsg);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">Create Teacher Profile</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              Welcome, {user.first_name} {user.last_name}
            </span>
            <Button size="sm" variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {message && (
            <Alert className="mb-4 bg-green-50 text-green-700 border-green-200">
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert className="mb-4 bg-red-50 text-red-700 border-red-200">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-medium">User Information</h3>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <div className="flex gap-2">
              <Input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <Input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>

            <h3 className="text-lg font-medium">Teacher Information</h3>
            <Input
              type="text"
              name="university_name"
              value={formData.university_name}
              onChange={handleChange}
              placeholder="University Name"
              required
            />
            <Select
              name="gender"
              value={formData.gender}
              onValueChange={(value) => setFormData({ ...formData, gender: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="number"
              name="year_joined"
              value={formData.year_joined}
              onChange={handleChange}
              placeholder="Year Joined"
              min="1900"
              max="2099"
              required
            />

            <Button type="submit" className="w-full">
              Create Teacher
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherForm;
