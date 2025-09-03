import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Sheet,
    //   SheetClose,
    SheetContent,
    SheetDescription,
    //   SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

interface IProps {
    children: React.ReactNode,
    header?: string,
    description?: string
}

export default function DrawerSheet({ children, header, description }: IProps) {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button variant="outline" className=" rounded-4xl  h-[24px] border border-bordercolor w-[68px] text-brand text-xs cursor-pointer " >VIEW</Button>
            </SheetTrigger>
            <SheetContent className=" w-[600px] max-w-full bg-white " >
                {(header || description) && (
                    <SheetHeader >
                        {header && (
                            <SheetTitle>{header}</SheetTitle>
                        )}
                        {description && (
                            <SheetDescription>
                                {description}
                            </SheetDescription>
                        )}
                    </SheetHeader>
                )}
                <div className=" w-full h-full overflow-y-auto flex flex-col py-4 " >
                    {children}
                </div>
            </SheetContent>
        </Sheet>
    )
}
