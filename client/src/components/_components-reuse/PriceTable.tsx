import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ServiceItem {
    title: string;
    headSubtitle?: string;
    subtitle: string | string[];
    price: string;
    quantity: string;
    imageUrl: string;
    buttonLabel: string;
    headSubtitleIcon?: React.ReactNode | string;
    subtitleIcon?: React.ReactNode | string;
    note?: string[];
}

interface PriceTableProps {
    items: ServiceItem[];
    layoutType: 'grid' | 'side-by-side';
    isImageFirst?: boolean;
}

export const PriceTable: React.FC<PriceTableProps> = ({
    items,
    layoutType,
    isImageFirst = false,
}) => {
    return (
        <>
            {layoutType === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                    {items.map((item) => (
                        <div key={item.title} className="text-center">
                            <div className="relative w-full h-[300px]">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-white rounded-[20px] p-6 shadow-lg flex flex-col justify-between items-center">
                                <h3 className="text-[#1b8b8d] text-2xl font-bold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[#22566e] text-lg font-medium mb-2">
                                    {item.price}/{item.quantity}
                                </p>
                                {item.headSubtitle && (
                                    <span className="text-[#ee887a] text-lg font-bold">
                                        {item.headSubtitle}
                                    </span>
                                )}
                                {item.subtitle && (
                                    <p className="text-[#22566e] text-md font-normal">
                                        {item.subtitle}
                                    </p>
                                )}
                                <button className="mt-4 px-4 py-2 bg-[#f3908a] rounded-lg text-white text-lg font-bold">
                                    {item.buttonLabel}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full px-16">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className={cn(
                                'flex flex-col md:flex-row items-center justify-center',
                                isImageFirst
                                    ? 'md:flex-row-reverse'
                                    : 'md:flex-row'
                            )}
                        >
                            {/* <div className="relative w-2/3 h-[500px]"> */}
                            {/* <Image
                                src={item.imageUrl}
                                alt={item.title}
                                // fill
                                width={500}
                                height={450}
                                className="w-auto h-[450px]"
                            /> */}
                            {/* </div> */}
                            <div className="relative w-[500px] h-[500px]">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    sizes="max-width(720px) 100vw, 500px"
                                    className="object-contain"
                                />
                            </div>
                            <div className="bg-white p-6 w-1/3 rounded-lg shadow-lg">
                                <h3 className="text-[#158283] text-2xl font-bold">
                                    {item.title}
                                </h3>
                                <div className="flex items-center my-4">
                                    <p className="text-[#22566e] text-4xl font-extrabold">
                                        {item.price}/
                                    </p>
                                    <p className="text-[#22566e] text-4xl font-extrabold uppercase">
                                        {item.quantity}
                                    </p>
                                </div>
                                {item.headSubtitle && (
                                    <span className="text-[#ee887a] text-lg font-bold">
                                        {item.headSubtitle}
                                    </span>
                                )}
                                {item.subtitle && (
                                    <p className="text-[#22566e] text-md font-medium">
                                        {item.subtitle}
                                    </p>
                                )}
                                <button className="mt-4 px-6 py-3 bg-[#f3908a] rounded-lg text-white text-lg font-bold">
                                    {item.buttonLabel}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
