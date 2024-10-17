import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CustomLoading = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <div className="flex items-center flex-col my-10 justify-center">
          <Image src={"/loading.gif"} width={80} height={80}/>
          <h2 className="text-primary">Generating your video...</h2>
          <h2 className="text-[#11ccf5]">Stay on this page</h2>
          <Link href={"/dashboard"}>
            <Button className='mt-2'>Cancel</Button>
          </Link>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;
