import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface IntroSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    isImageFirst?: boolean;
}

const IntroSection: React.FC<IntroSectionProps> = ({
    title,
    description,
    imageUrl,
    isImageFirst = false,
}) => {
    return (
        <section className="container mx-auto">
            <div
                className={cn(
                    'flex flex-col md:flex-row items-center justify-center gap-8 py-10',
                    isImageFirst && 'md:flex-row-reverse'
                )}
            >
                <div className="md:flex-1 mt-10 md:mt-0">
                    <h2 className="text-[#35a5a7] text-3xl md:text-4xl font-bold mb-4">
                        {title}
                    </h2>
                    <p className="text-[#22566e] text-lg md:text-xl font-normal mt-4">
                        {description}
                    </p>
                </div>

                <div className="md:flex-1">
                    <div className="relative w-full h-[400px] md:h-[600px]">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            quality={100}
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
