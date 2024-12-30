import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function FormTextarea({ label, ...props }: FormTextareaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label 
        className="block text-gray-700 mb-2 font-medium" 
        htmlFor={props.name}
      >
        {label}
      </label>
      <textarea
        rows={4}
        className={`
          w-full px-4 py-2 
          border border-gray-300 rounded-lg 
          focus:ring-2 focus:ring-primary focus:border-transparent 
          transition-all duration-200
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${props.disabled ? 'opacity-60' : ''}
        `}
        {...props}
      />
    </motion.div>
  );
}

export default memo(FormTextarea);