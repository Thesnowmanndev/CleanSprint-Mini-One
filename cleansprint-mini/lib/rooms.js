// {id: "", label: ""},

export const ROOM_TASKS = {
  bathrooms: [
    {
      id: "toilet-solution",
      label: "Coat toilet bowl with toilet cleaner solution.",
    },
    { id: "mirrors", label: "Wipe down mirror." },
    { id: "shower", label: "Spray & wipe down shower & fixtures." },
    { id: "bathtub", label: "Spray & wipe down bathtub & fixtures." },
    { id: "sink", label: "Clean sink & fixtures." },
    { id: "countertops", label: "Wipe down & sanitize counter-top surfaces." },
    { id: "floor", label: "Sweep & mop floor." },
    { id: "toilet", label: "Scrub toilet bowl & wipe down toilet surfaces." },
    { id: "linens", label: "Replace towels & rugs." },
    { id: "toiletries", label: "Restock toilet paper & tissues." },
    { id: "trash", label: "Empty trashcans." },
  ],
  bedrooms: [
    { id: "tidy", label: "Organize clothes & pick up stuff on floor." },
    { id: "nightstands", label: "Clean up nightstands & dresser surfaces." },
    { id: "old-bedding", label: "Remove bedding from bed." },
    { id: "surfaces", label: "Wipe down & santize surfaces." },
    { id: "tv", label: "Dust & wipe down TV and entertainment center." },
    { id: "floor", label: "Vacuum or sweep & mop floor." },
    { id: "new-bedding", label: "Replace bedding on bed." },
    { id: "declutter", label: "Declutter room." },
    { id: "closet", label: "Clean & organize closet." },
  ],
  daily: [
    { id: "laundry", label: "Run a load of laundry." },
    { id: "beds", label: "Make beds in house." },
    { id: "dishes", label: "Empty dishwasher & clean kitchen sink." },
    { id: "mail", label: "Sort & discard mail." },
    { id: "countertops", label: "Clean & sanitize kitchen countertops." },
    { id: "floor", label: "Sweep kitchen floor." },
    { id: "living-room", label: "Tidy & spot vacuum living room." },
    { id: "pillows-blankets", label: "Organize pillows & blankets." },
    { id: "trash", label: "Empty all trashcans in house." },
    { id: "weeds", label: "Spot pull flowerbed weeds (weather dependent)." },
    { id: "plants", label: "Water flowerbed plants (weather dependent)." },
  ],
  entrances: [
    { id: "shoes-closet", label: "Organize shoes, coats, bags, & umbrellas." },
    { id: "surfaces", label: "Dust surfaces." },
    { id: "decorations", label: "Dust & wipe down decorations." },
    { id: "glass-surfaces", label: "Clean & wipe down glass surfaces." },
    { id: "shake-rugs", label: "Shake out rugs & welcome mats." },
    { id: "floors", label: "Vacuum or sweep & mop floors." },
    { id: "doorknob", label: "Sanitize doorknob." },
  ],
  grocery: [
    { id: "fridge", label: "Clean out fridge & freezer." },
    { id: "pantry", label: "Clean out & organize pantry." },
    { id: "expired-items", label: "Throw away expired items." },
    { id: "check-ingredients", label: "Make note of your ingredient stocks." },
    { id: "meals", label: "Plan meals for the week." },
    { id: "shopping-list", label: "Make a shopping list of needed items." },
    { id: "shop", label: "Go grocery shopping." },
    { id: "unload", label: "Unload groceries." },
  ],
  kitchen: [
    { id: "empty-dishwasher", label: "Empty the dishwasher." },
    { id: "empty-sink", label: "Empty dishes from sink into dishwasher." },
    { id: "sink", label: "Clean sink." },
    { id: "stove", label: "Clean stovetop." },
    { id: "dish-rack", label: "Clean & dry dish rack." },
    { id: "fridge-surfaces", label: "Wipe down fridge surfaces & handles." },
    {
      id: "appliance-surfaces",
      label: "Wipe down applicane surfaces & handles.",
    },
    { id: "countertops", label: "Wipe down & sanitize counter-top surfaces." },
    { id: "floor", label: "Sweep & mop floor." },
    { id: "trash", label: "Empty trashcans." },
  ],
  livingroom: [
    {
      id: "pickup-clutter",
      label: "Organize clutter & tidy entertainment center.",
    },
    { id: "dust-surfaces", label: "Dust shelves, tables, & electronics." },
    {
      id: "wipe-surfaces",
      label: "Wipe down coffee table & furniture surfaces.",
    },
    { id: "floor", label: "Vacuum or sweep & mop floor." },
    { id: "pillows-blankets", label: "Fluff pillows & organize blankets." },
    { id: "glass-surfaces", label: "Clean windows & glass doors." },
    { id: "trash", label: "Empty living room trashcans." },
  ],
  misc: [
    { id: "car", label: "Tidy & vacuum car." },
    { id: "cabinets", label: "Declutter all drawers & cabinets." },
    { id: "blinds", label: "Dust & clean all blinds." },
    { id: "pet-hair", label: "Remove pet hair from furniture surfaces." },
    { id: "furniture", label: "Clean under furniture & cushions." },
    { id: "carpet", label: "Clean carpets & rugs." },
    { id: "hallways", label: "Sweep & mop or vacuum hallways." },
    { id: "dryer", label: "Clean out dryer house vent." },
  ],
};

export function getRooms() {
  return [
    { id: "bathrooms", name: "Bathrooms" },
    { id: "bedrooms", name: "Bedrooms" },
    { id: "daily", name: "Daily" },
    { id: "entrances", name: "Entrances" },
    { id: "grocery", name: "Grocery" },
    { id: "kitchen", name: "Kitchen" },
    { id: "livingroom", name: "Living Room" },
    { id: "misc", name: "Misc" },
  ];
}

export function getRoomTasks(room) {
  if (!room) return null;
  return ROOM_TASKS[room] || null;
}
