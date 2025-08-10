"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Minus, Plus, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { useRouter } from "next/navigation"

export function BookingForm() {
  const router = useRouter()
  const [date, setDate] = React.useState<DateRange | undefined>()
  const [guests, setGuests] = React.useState({ rooms: 1, adults: 2, children: 0 })

  const handleGuestChange = (field: "adults" | "children" | "rooms", value: number) => {
    const newValue = Math.max(field === "adults" || field === "rooms" ? 1 : 0, value)
    setGuests((prev) => ({ ...prev, [field]: newValue }))
  }

  const totalGuests = guests.adults + guests.children

  const handleBooking = () => {
    // In a real app, you'd pass this data to the booking page
    router.push("/booking")
  }

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 items-end w-full max-w-5xl">
      <div className="grid gap-1.5">
        <Label htmlFor="check-in" className="text-sm font-medium text-gray-600">
          Check-In Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="check-in"
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal border-gray-300",
                !date?.from && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? format(date.from, "LLL dd, y") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700" align="start">
            <Calendar initialFocus mode="range" selected={date} onSelect={setDate} numberOfMonths={2} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="check-out" className="text-sm font-medium text-gray-600">
          Check-Out Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="check-out"
              variant={"outline"}
              disabled={!date?.from}
              className={cn(
                "w-full justify-start text-left font-normal border-gray-300",
                !date?.to && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.to ? format(date.to, "LLL dd, y") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700" align="start">
            <Calendar initialFocus mode="range" selected={date} onSelect={setDate} numberOfMonths={2} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-gray-600">Guests</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal border-gray-300 bg-transparent"
            >
              <User className="mr-2 h-4 w-4" />
              <span>
                {guests.rooms} Room{guests.rooms > 1 ? "s" : ""}, {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-white p-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="rooms">Rooms</Label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-transparent"
                    onClick={() => handleGuestChange("rooms", guests.rooms - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    id="rooms"
                    type="number"
                    value={guests.rooms}
                    onChange={(e) => handleGuestChange("rooms", Number.parseInt(e.target.value))}
                    className="w-14 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-transparent"
                    onClick={() => handleGuestChange("rooms", guests.rooms + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="adults">Adults</Label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-transparent"
                    onClick={() => handleGuestChange("adults", guests.adults - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    id="adults"
                    type="number"
                    value={guests.adults}
                    onChange={(e) => handleGuestChange("adults", Number.parseInt(e.target.value))}
                    className="w-14 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-transparent"
                    onClick={() => handleGuestChange("adults", guests.adults + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="children">Children</Label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-transparent"
                    onClick={() => handleGuestChange("children", guests.children - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    id="children"
                    type="number"
                    value={guests.children}
                    onChange={(e) => handleGuestChange("children", Number.parseInt(e.target.value))}
                    className="w-14 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-transparent"
                    onClick={() => handleGuestChange("children", guests.children + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Button onClick={handleBooking} size="lg" className="bg-gray-800 text-white hover:bg-gray-700 h-12">
        Book Now
      </Button>
    </div>
  )
}
