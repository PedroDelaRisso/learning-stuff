import { FaSolidFire, FaSolidPlus, FaSolid1, FaSolid2, FaSolid3 } from 'solid-icons/fa';

const Sidebar = () => {
  return (
    <div class="fixed top-0 left-0 h-screen w-16 m-0
                flex flex-col
                bg-gray-900 text-white">
      <SidebarIcon icon={<FaSolidFire size={28} />} text="Fire icon 🔥"/>
      <SidebarIcon icon={<FaSolid1 size={28} />} text="one"/>
      <SidebarIcon icon={<FaSolid2 size={28} />} text="two"/>
      <SidebarIcon icon={<FaSolid3 size={28} />} text="three"/>
      <SidebarIcon icon={<FaSolidPlus size={28} />} text="new"/>
    </div>
  )
};

const SidebarIcon = ({icon, text = 'tooltip'}) => {
  return (
    <div class="sidebar-icon group">
      {icon}
  
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  )
}

export default Sidebar;
