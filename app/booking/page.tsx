"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BookingPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  })
  const [bookingStatus, setBookingStatus] = React.useState<string | null>(null)

  const handleBookingSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBookingStatus("Thank you for your booking! We will contact you shortly to confirm the details.")
    setTimeout(() => setBookingStatus(null), 5000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <div className="py-24 md:py-32">
          <div className="container mx-auto max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-mask text-center">Make a Reservation</h1>
            <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-center text-lg">
              Fill out the form below to book your stay. We look forward to welcoming you.
            </p>
            <Card className="mt-12 bg-gray-950 border-gray-800">
              <CardContent className="p-8">
                {bookingStatus ? (
                  <div className="text-center p-8 bg-green-900/50 border border-green-500 rounded-lg">
                    <p className="text-lg text-white">{bookingStatus}</p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="name" className="text-gray-400">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          className="bg-black border-gray-700 text-white"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-gray-400">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          required
                          className="bg-black border-gray-700 text-white"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-gray-400">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          required
                          className="bg-black border-gray-700 text-white"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="room-type-booking" className="text-gray-400">
                          Room Type
                        </Label>
                        <Select required>
                          <SelectTrigger id="room-type-booking" className="bg-black border-gray-700 text-white">
                            <SelectValue placeholder="Select a room" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-white">
                            <SelectItem value="deluxe-king">Deluxe King Room</SelectItem>
                            <SelectItem value="executive-suite">Executive Suite</SelectItem>
                            <SelectItem value="panoramic-penthouse">Panoramic Penthouse</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="booking-dates" className="text-gray-400">
                        Dates
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="booking-dates"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal bg-black border-gray-700 hover:bg-gray-900 text-white",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                              date.to ? (
                                <>
                                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(date.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Pick your dates</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-mask text-black hover:brightness-125 font-bold text-lg"
                    >
                      Confirm Booking
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
