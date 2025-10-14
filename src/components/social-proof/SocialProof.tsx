/**
 * SocialProof Component
 * Responsibility: Compose avatar group with statistics text
 */

import { SocialProofProps } from '@/types/components.types';
import AvatarGroup from './AvatarGroup';
import StatsText from './StatsText';

export default function SocialProof({
  avatars,
  statsCount,
  statsLabel,
  className = '',
}: SocialProofProps) {
  return (
    <div className={`flex flex-col items-center mt-10 ${className}`}>
      <AvatarGroup avatars={avatars} />
      <StatsText count={statsCount} label={statsLabel} />
    </div>
  );
}

