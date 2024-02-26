'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

const items = [
    { title: 'House Clean', descritpion: 'Lorem ipsum dolor sit.', href: '/' },
    {
        title: 'End Of Lease / Bond Cleaning',
        description: 'Lorem ipsum dolor sit.',
        href: '/',
    },
    {
        title: 'Office Clean',
        description: 'Lorem ipsum dolor sit.',
        href: '/',
    },
];

export interface ServicesDialogProps {}

export function ServicesDialog() {
    const [open, setOpen] = useState(true);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="rounded mx-4">
                <DialogHeader>
                    <DialogTitle>Select Services</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6">
                    {items.map(i => (
                        <div
                            key={i.title}
                            className="border rounded-lg p-4 cursor-pointer transition-colors hover:border-primary"
                        >
                            <div className="font-medium text-lg">{i.title}</div>
                            <div className="text-muted-foreground text-sm">
                                {i.description}
                            </div>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
