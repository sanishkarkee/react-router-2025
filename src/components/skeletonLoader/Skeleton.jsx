// components/Skeleton.jsx
const Skeleton = ({ height = '1rem', width = '100%', style = {} }) => {
  return (
    <div
      style={{
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        height,
        width,
        animation: 'pulse 1.5s infinite',
        ...style,
      }}
    />
  );
};

export default Skeleton;
