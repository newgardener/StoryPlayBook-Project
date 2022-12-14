import * as React from "react";
import classNames from "classnames/bind";

import { Shark } from "../../assets/images";
import { Button } from "../Button";
import { FlexLayout } from "../Layout";
import { SvgIcon } from "../SvgIcon";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type ProductImage = {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  backgroundColor: string;
};

type Product = {
  productId: number;
  priority: number;
  name: string;
  description?: string;
  badgeStatus?: "NONE" | "NEW";
} & ProductImage;

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
  if (!Array.isArray(products)) return null;

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
        {products.map((product, index) => (
          <li key={product.productId ?? index} className={cx("item")}>
            <div
              className={cx("thumbnail")}
              style={{ background: product.backgroundColor }}
            >
              <SvgIcon icon={product.icon ?? Shark} />
            </div>
            <div className={cx("col")}>
              <FlexLayout className={cx("row")} direction="column" alignItems="start">
                <FlexLayout
                  className={cx("content")}
                  direction="row"
                  justifyContent="between"
                  alignItems="center"
                >
                  <Typography className={cx("name")} tag="p" weight="bold" fontSize={14}>
                    {product.name}
                  </Typography>
                  <Button size="small" backgroundColor="#eff2f4" textColor="black">
                    ????????????
                  </Button>
                </FlexLayout>
                <Typography
                  className={cx("description")}
                  tag="span"
                  fontSize={12}
                  color="#444b52"
                >
                  {product.description}
                </Typography>
              </FlexLayout>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
