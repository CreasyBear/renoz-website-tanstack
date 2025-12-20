"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
	value?: string;
	onChange?: (date: string) => void;
	placeholder?: string;
	maxDate?: Date;
	disabled?: boolean;
}

export function DatePicker({
	value,
	onChange,
	placeholder = "Pick a date",
	maxDate,
	disabled = false,
}: DatePickerProps) {
	const [date, setDate] = React.useState<Date | undefined>(
		value ? new Date(value) : undefined,
	);

	const handleSelect = (selectedDate: Date | undefined) => {
		setDate(selectedDate);
		if (selectedDate && onChange) {
			// Format as YYYY-MM-DD for form compatibility
			const formattedDate = format(selectedDate, "yyyy-MM-dd");
			onChange(formattedDate);
		}
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						"w-full justify-start text-left font-normal",
						!date && "text-muted-foreground",
					)}
					disabled={disabled}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>{placeholder}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={date}
					onSelect={handleSelect}
					disabled={(date) => {
						if (maxDate && date > maxDate) return true;
						return false;
					}}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
