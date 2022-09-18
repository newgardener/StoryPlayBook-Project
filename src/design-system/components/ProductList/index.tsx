import * as React from "react";

import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { Typography } from "../Typography";
import { SvgIcon } from "../SvgIcon";
import { Button } from "../Button";
import { FlexLayout } from "../Layout";

const cx = classNames.bind(styles);

type ProductImage = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  backgroundColor: string;
};

type Product = {
  productId: number;
  priority: number;
  name: string;
  description?: string;
  image: {
    defaultImage: ProductImage;
    darkModeImage?: ProductImage;
  };
  badgeStatus?: "NONE" | "NEW";
};

export type ProductListProps = {
  title: string;
  subtitle?: string;
  products: Product[];
  isCardType?: boolean;
  className?: string;
};

export const ProductList = ({
  title,
  subtitle,
  products,
  isCardType = false,
  className,
}: ProductListProps) => {
  return (
    <section className={cx("product-list", className, { cardType: isCardType })}>
      <header className={cx("product-header")}>
        {subtitle && (
          <Typography tag="p" fontSize={12} color="rgba(6, 11, 17, 0.48)">
            {subtitle}
          </Typography>
        )}
        <Typography tag="h3" weight="bold" fontSize={20}>
          {title}
        </Typography>
      </header>
      <ul>
        {products.map((product) => (
          <li key={product.productId} className={cx("item")}>
            <div
              className={cx("thumbnail")}
              style={{ background: product.image.defaultImage.backgroundColor }}
            >
              <SvgIcon icon={product.image.defaultImage.icon} />
            </div>
            <div className={cx("col")}>
              <FlexLayout
                className={cx("row")}
                direction="row"
                justifyContent="between"
                alignItems="center"
              >
                <Typography className={cx("name")} tag="p" weight="bold" fontSize={16}>
                  {product.name}
                </Typography>
                <Button size="small" backgroundColor="#eff2f4" textColor="black">
                  알아보기
                </Button>
              </FlexLayout>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
