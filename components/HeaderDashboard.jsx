
import Label from './Label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Button from './Button';
import { Plus } from 'lucide-react'
import AddDonationForm from './AddDonationForm';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const HeaderDashboard = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <Label className={'text-[20px]'}>Donation List</Label>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="money">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
            {/* Check plus icon */}
            <Button 
                variant={'default'} 
                className="hover:rounded-xl transition-all" 
                size={'icon'}
            >
                <Dialog>
                    <DialogTrigger>
                        <Plus className="w-6 h-6"/>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader className="flex flex-col items-center justify-center gap-[10px] w-full">
                            <DialogTitle className="flex flex-col items-center justify-center gap-[10px]">
                                <Label className="text-[17px] tracking-[1px] text-muted-foreground">Add New Donation Here ❤️</Label>
                            </DialogTitle>
                            <DialogDescription className="text-center text-zinc-500">
                                Vos contributions financières nous permettent de poursuivre notre mission 
                                et de fournir des ressources essentielles à ceux qui en ont le plus besoin. 
                                Faites un don aujourd'hui.
                            </DialogDescription>
                        </DialogHeader>
                        <AddDonationForm />
                    </DialogContent>
                </Dialog>
            </Button>
        </div>
    )
}

export default HeaderDashboard