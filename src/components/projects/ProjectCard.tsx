'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import PlayCircle from '../svgs/PlayCircle';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const sunburstClass =
    index % 2 === 0 ? 'project-sunburst-a' : 'project-sunburst-b';

  const projectHref = project.details
    ? project.projectDetailsPageSlug
    : project.link || project.live;

  return (
    <div className="group flex h-full w-full flex-col gap-2">
      {/* Preview frame — hover only affects bg + mockup */}
      <div className="rounded-[12px] border border-neutral-300 p-[4px] dark:border-neutral-700">
        <div className="relative h-[200px] overflow-hidden rounded-[8px] border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-700">
          {/* Sunburst bg — visible on hover only */}
          <div
            className={cn(
              'absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
              sunburstClass,
            )}
            aria-hidden="true"
          />

          <p className="absolute top-2 left-2 z-10 text-xs font-medium text-neutral-500 transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-black">
            Preview
          </p>

          {/* Bottom-anchored mockup — shrinks slightly on hover */}
          <div className="bg-background absolute bottom-0 left-1/2 z-10 h-[75%] w-[88%] -translate-x-1/2 rounded-t-[10px] transition-all duration-300 group-hover:h-[70%]">
            <div className="relative h-full w-full overflow-hidden rounded-t-[8px]">
              <Image
                className="h-full w-full rounded-tl-lg rounded-tr-lg border border-white object-cover dark:border-neutral-800"
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                draggable={false}
              />

              {project.video && (
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <button
                        type="button"
                        className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
                      >
                        <PlayCircle />
                      </button>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-4xl border-0 p-0">
                    <div className="aspect-video w-full">
                      <video
                        className="h-full w-full rounded-lg object-cover"
                        src={project.video}
                        autoPlay
                        loop
                        controls
                      />
                    </div>
                    <DialogTitle className="sr-only">
                      {project.title}
                    </DialogTitle>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1 px-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-foreground text-[1.1rem] leading-tight font-bold">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            {project.isWorking ? (
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
            ) : (
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-red-500" />
              </span>
            )}
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {project.isWorking ? 'Live' : 'Building'}
            </span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm font-normal text-neutral-500 dark:text-neutral-400">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-black/15 bg-black/5 px-2.5 py-1 text-xs text-neutral-700 dark:border-white/20 dark:bg-white/10 dark:text-neutral-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}

        <Link
          href={projectHref}
          {...(!project.details
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className="mt-auto flex items-center gap-1 pt-1 text-sm font-normal text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:-rotate-45"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
