import { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const useRefInView = (ref) => {
	const [inViewRef, inView] = useInView({ threshold: 0.7 });

	// Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
	const setRefs = useCallback(
		(node) => {
			// Ref's from useRef needs to have the node assigned to `current`
			ref.current = node;
			// Callback refs, like the one from `useInView`, is a function that takes the node as an argument
			inViewRef(node);
		},
		[inViewRef]
	);

	return { inView, setRefs };
};

export default useRefInView;
