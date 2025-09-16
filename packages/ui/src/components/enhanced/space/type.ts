export interface SpaceProps {
  /** 对齐方式 */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /** 主轴对齐方式 */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  /** 间距 */
  gap?: number | string;
  /** 方向 */
  vertical?: boolean;
  /** 是否自动换行	 */
  wrap?: boolean;
}