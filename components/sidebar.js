//https://www.youtube.com/watch?v=ydPpcR85UCg
//https://ui.shadcn.com/docs/components/card
//ChatGPT
'use client';
import Link from "next/link";
//import { usePathname } from 'next/navigation';
import { usePathname } from 'next/navigation'; 
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "../components/ui/command";
import { User, Settings, MessageCircle, Vault } from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname(); 

    // Define the menu list
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/profile",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/deposits",
                    icon: <Vault />,
                    text: "Deposits"
                },
                {
                    link: "/settings",
                    icon: <Settings />,
                    text: "Settings"
                },
                {
                    link: "/inbox",
                    icon: <MessageCircle />,
                    text: "Inbox"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col w-[300px] border-r min-h-screen p-5 mt-2">
            <Command className="flex-grow ">
                <CommandList>
                    {menuList.map((menu, menuKey) => (
                        <CommandGroup key={menuKey} heading={menu.group}>
                            {/* Loop through the menu items */
                            /*  From Chat GPT */}
                            {menu.items.map((item, itemKey) => (
                                <CommandItem 
                                    key={itemKey} 
                                    onSelect={() => window.location.href = item.link} // Client-side navigation
                                    className={`flex items-center space-x-3 
                                        ${pathname === item.link ? 'bg-gray-200 text-black' : 'hover:bg-gray-100'}
                                    `}
                                    aria-label={item.text}
                                >
                                    <span>{item.icon}</span>
                                    <span className="ml-2">{item.text}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>

            {/* Terms and Services Link at the bottom */}
            
        </div>
    );
}
