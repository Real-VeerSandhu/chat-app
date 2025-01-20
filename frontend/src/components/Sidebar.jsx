import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";

const Sidebar = () => {
    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
    const onlineUsers = []; // will change with socketio

    useEffect(() => {
        getUsers()
    }, [getUsers])

    if (isUsersLoading) return <SidebarSkeleton />
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar