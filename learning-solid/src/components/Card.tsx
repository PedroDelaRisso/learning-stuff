import { JSXElement } from "solid-js";

interface IProps {
  rounded: boolean;
  flat: boolean;
  children: JSXElement[];
}

export default function Card(props: IProps) {
  return (
    <div class="bg-white p-4 text-center"
      classList={{'rounded-md': props.rounded, 'shadow-md': !props.flat}}
    >
      {props.children}
    </div>
  )
}