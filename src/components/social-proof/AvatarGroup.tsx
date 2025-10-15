/**
 * AvatarGroup Component
 * Responsibility: Render overlapping user avatars
 */

import Image from 'next/image';
import { AvatarGroupProps } from '@/types/components.types';

export default function AvatarGroup({
  avatars,
  maxVisible = 4,
  className = '',
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, maxVisible);

  return (
    <div className={`flex -space-x-2 sm:-space-x-3 ${className}`}>
      {visibleAvatars.map((avatar, index) => (
        <div
          key={avatar.id}
          className="
            w-9 h-9 sm:w-10 sm:h-10
            rounded-full 
            border-2 
            border-primary-bg 
            bg-gradient-to-br from-violet-500 to-purple-600
            flex items-center justify-center
            transition-transform 
            hover:scale-110 
            hover:z-10
            cursor-pointer
          "
          style={{ zIndex: visibleAvatars.length - index }}
          title={avatar.alt}
        >
          {avatar.imageUrl ? (
            <Image
              src={avatar.imageUrl}
              alt={avatar.alt}
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-white text-sm font-semibold">
              {avatar.alt.charAt(0)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

