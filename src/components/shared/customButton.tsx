import React from "react";
import { Button } from "@/components/ui/button"; // Adjust this import to your Button component path
import { Loader2 } from "lucide-react"; // Ensure `lucide-react` is installed

const CustomButton = ({ children, isLoading, ...props }: { children?: React.ReactNode; isLoading?: boolean } & React.ComponentProps<typeof Button>) => {
    return (
        <Button disabled={isLoading} {...props}>
            {isLoading ? 
                <div className=" flex items-center justify-center gap-1 " >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                </div> : children} 
        </Button>
    );
};

export default CustomButton;
