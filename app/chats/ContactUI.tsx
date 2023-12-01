import Link from "next/link";
import { Contact } from "../../types/contact";
import BlankUser from "./BlankUser";
import { UPDATE_CURRENT_CONTACT, useCurrentContactDispatch } from "./CurrentContactContext";

export default function ContactUI(props: { contact: Contact }) {
    const { contact } = props;
    const setCurrentContact = useCurrentContactDispatch();
    
    const handleContactClick = () => {
        setCurrentContact && setCurrentContact({ type: UPDATE_CURRENT_CONTACT, waId: contact.wa_id });
    };

    return (
        <Link href={`/chats/${contact.wa_id}`}>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg m-2 p-4" onClick={handleContactClick} style={{ fontSize: '0.875rem' }}>
                <div className="flex items-center">
                    <BlankUser className="w-12 h-12 mr-4" />
                    <div>
                        <span className="text-base font-semibold">{contact.profile_name}</span>
                        <span className="block text-sm text-gray-500">{contact.wa_id}</span>
                    </div>
                </div>
                {/* TODO: Add some indication that this card is selected based on condition - contact.is_current */}
            </div>
        </Link>
    );
}
